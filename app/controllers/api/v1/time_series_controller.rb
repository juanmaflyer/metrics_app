class Api::V1::TimeSeriesController < ApplicationController
  def index
    # can receive metric_id in params to filter by metric_id
    # can receive start_date and end_date to select time_period
    render json: { response: 'ok' }, status: 200
  end

  def create
    render json: { response: 'ok' }, status: :ok
  end

  def averages
    render json: { response: 'ok' }, status: :ok
  end
end
