class ProductsIndex < Chewy::Index
  define_type Product do
    field :name
    field :category
    field :SKUs
    field :sold_out
    field :under_sale
    field :price
    field :sale_price
  end
end
