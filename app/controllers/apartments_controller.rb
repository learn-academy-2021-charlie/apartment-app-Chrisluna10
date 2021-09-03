class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = current_user.apartments.create(apartment_params)
        if apartment.valid? 
            render json: apartment
        else
        render json: apartment.errors, status: 422
        end
    end

    def update
        if user_signed_in?
            apartment = Apartment.find(params[:id])
            apartment.update(apartment_params)
            render json: apartment
        else 
            render json: {}, status:401
        end
    end

    def destroy
        if user_signed_in?
        apartment = Apartment.find(params[:id])
        apartment.destroy
        render json: apartment
        else 
            render json: {}, status:401
        end
    end

    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager,
        :email, :price, :bedrooms, :bathrooms, :pets)
    end
    
end
