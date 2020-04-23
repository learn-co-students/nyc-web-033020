class StudentsController < ApplicationController
  # get '/students'
  def index 
    @students = Student.all
    # render :index
  end 

  def show
    @student = Student.find(params[:id])
    render :show
  end 

end
