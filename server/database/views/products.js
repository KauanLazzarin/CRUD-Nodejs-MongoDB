async function getDataAtribbutes (data) {
    let productAtrribs = [];

    data.forEach((element) => {
        productAtrribs.push({
            names: element.name,
            marks: element.mark ,
            prices: element.price,
            productId: element._id
        })
    });
    
    console.log(productAtrribs);
    return productAtrribs;
};

module.exports = {
    getDataAtribbutes
}