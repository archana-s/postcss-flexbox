# postcss-flexbox
PostCSS Flexbox provides an easy to use option for using CSS3 Flexbox layouts. This is supported by IE 10+ and all evergreen browsers.

## Installation

## Usage
CSS3 Flexbox lets you set the layout for container divs: horizontal alignment of children or vertical. The children can in turn choose the space they occupy in the container and the alignment as well. Below are a lot of examples to show how this works.

postcss-flexbox offers 2 props to set on a selector:

1. box : This is to make a HTML element a flexbox
   One of the following options is necessary to specify the direction of laying things out:
   1. horizontal
   2. horizontal-reverse
   3. vertical
   4. vertical-reverse

   Here are the rest of the options which will apply based on the direction:
   1. top
   2. bottom
   3. left
   4. right
   5. middle (vertical center)
   6. center (horizontal center)
   7. space-around
   8. space-between
   9. wrap
   10. wrap-reverse

2. box-item : This is to align or adjust size of elements within a flexbox
   Here are the list of options:
   1. top
   2. bottom
   3. right
   4. left
   5. middle
   6. center
   7. stretch
   8. flex-auto
   9. flex-1 ... flex-12

### Horizontal box
    .horizontal-box {
      box: 'horizontal';
    }
![HorizontalBox](https://lh3.googleusercontent.com/-aSnIdPAty78/VoCc3jOo0eI/AAAAAAAAOv0/7UMisdT-YSk/s1024-Ic42/snapshot1.png "Horizontal Box")

## Horizontal box + items centered
    .horizontal-box.align-items-center {
       box: 'horizontal center';
    }
[Horizontal Box Items Centered](https://lh3.googleusercontent.com/-Q2Umh0TOeBE/VoCc4X-BvDI/AAAAAAAAOv8/sLsPCjvSQOc/s1016-Ic42/snapshot2.png "Horizontal Box Items Centered")

## Horizontal box + items centered at the bottom
    .horizontal-box.align-items-bottom-center {
       box: 'horizontal bottom center';
    }
[Horizontal Box Items Centered at Bottom](https://lh3.googleusercontent.com/-ldkAKXJxMEk/VoCc447MEMI/AAAAAAAAOwA/vugH4TyvQx4/s1024-Ic42/snapshot3.png "Horizontal Box Items Centered at Bottom")

## Contributing
## Changelog
## License
