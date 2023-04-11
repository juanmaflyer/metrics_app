class Api::V1::TimeSeriesController < ApplicationController
  wrap_parameters false

  def index
    # can receive metric_id in params to filter by metric_id
    # can receive start_date and end_date to select time_period
    @observations = Observation.where(metric_id: params[:metric_id])
    render json: serialize(@observations), status: 200
  end

  def create
    @observation = Observation.new(observation_params)
    @observation.timestamp = Time.current

    if @observation.save
      render json: @observation, status: :created
    else
      render json: { errors: @observation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def averages
    render json: { response: 'ok' }, status: :ok
  end

  private

  def observation_params
    params.permit(:metric_id, :value)
  end

  def serialize(observations)
    observations.map do |o|
      [
        o.timestamp.to_i * 1000,
        o.value
      ]
    end
  end
end
