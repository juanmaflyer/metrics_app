To fill observation table with sample data in order to be shown in the metrics graph we can execute the following query.
We should consider that for Barcelona Temp and Nuclear Reactor temp we want regular observations. We can make use of generate_series()
function of postgreSQL to achieve this.

== Nuclear Reactor time series

// reactor temps can be between 70 and 90 degrees, this metric is collected each minute
INSERT INTO observations (metric_id, value, timestamp)
    (SELECT 2 as metric_id, trunc(random() * 20 + 70) as value, * FROM generate_series('2023-04-11','2023-04-18', INTERVAL '1 minute') as  timestamp);

// barcelona temps in spring can be between 10 and 30 degrees, this metric is collected hourly
INSERT INTO observations (metric_id, value, timestamp)
    (SELECT 3 as metric_id, trunc(random() * 20 + 10) as value, * FROM generate_series('2023-04-11','2023-04-18', INTERVAL '1 hour') as  timestamp);    