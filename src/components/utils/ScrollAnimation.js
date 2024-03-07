// // IntersectionObserver to handle scroll animations
// const animatedScrollObserver = new IntersectionObserver( ( entries ) =>
// {
//     entries.forEach( ( entry ) =>
//     {
//         console.log( 'Entry:', entry ); // Check the entry object
//         const animationType = entry.target.dataset.animationType !== undefined ? entry.target.dataset.animationType : 'enter';

//         if ( entry.isIntersecting )
//         {
//             console.log( 'Animating:', entry.target );
//             console.log( 'Animation Type:', animationType ); // Check if animationType is correct
//             entry.target.classList.add( `${ animationType }` );
//             // Do not unobserve the element to keep observing for future intersections
//         } else
//         {
//             // Handle the case when the element is not intersecting (optional)
//             // Remove classes or add additional logic as needed
//             entry.target.classList.remove( 'animationType' );
//             entry.target.classList.remove( `enter-${ animationType }` );

//         }
//     } );
// } );

// export default {
//     // Vue directive to bind the scroll animation
//     bind( el, binding )
//     {
//         // Add the 'before-enter' class with the specified animation type
//         el.classList.add( `before-${ binding.value }` );

//         // Store the animation type in the element's dataset
//         el.dataset.animationType = binding.value;


//         // Start observing the element for intersection with the viewport
//         animatedScrollObserver.observe( el );
//     },
// };

// // IntersectionObserver to handle scroll animations

const animatedScrollObserver = new IntersectionObserver( ( entries ) =>
{
    entries.forEach( ( entry ) =>
    {
        const animationType = entry.target.dataset.animationType || 'fade';

        if ( entry.isIntersecting )
        {
            entry.target.classList.add( `${ animationType }` );
        } else
        {
            entry.target.classList.remove( `${ animationType }` );
        }
    } );
} );

export default {
    bind( el, binding )
    {
        const animationType = binding.value;
        el.classList.add( `before-${ animationType }` );
        el.dataset.animationType = animationType;
        animatedScrollObserver.observe( el );
    },
};
