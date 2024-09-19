class DashboardController < ApplicationController
  def index
    @random_instrument = Instrument.order("RANDOM()").first
  end
end
