# Useful helpers

## 1. Reset list mixin

Let's create a mixin that resets a list (ordered or unordered) - no padding, no margin and no list style. I should be able to use like this:

```scss
    ul {
        @include reset-list;
    }
```

## 2. Center content

Let's create a mixin that centers vertically and horizontally contents. Feel free to use any of the techniques you know for centering (flex, grid, transform...).

```scss
    @include center;
```

## 3. Hide element

Create a mixin to hide elements.
I should be able to use it like this, for example:

```scss
    .hide {
        @include hide;
    }
```

### 4. Triangle

Let's create a mixin what creates a triangle with only css!
I should be able to use it like so:

```scss
.triangle {
    @include triangle('up');
}
```

There should be a default color (`#000`), but I could also pass one:

```scss
.triangle {
    @include triangle('up', red);
}
```

## 5. Fade in animation

Create a mixin that when included adds a fade in animation
that makes the element appear and scale. Animation should keep going forever, alternating its direction.
I should be able to use the mixing like so:

```scss
    .box {
        @include fade-in;
    }
```

Can you also add custom duration to the mixin usage:

```scss
    .box {
        @include fade-in(0.5);
    }
```
> Note: we want animation, not transition

Did you use any of the mixins you previously created?

## 6. Font sizing

Let's define a mixin that gets a font size by its name.
First, we need to define a list of available font sizes, for example:

* xs: 12px
* sm: 14px
* m: 16px
* l: 32px
* xl: 48px
* xxl: 61px

```scss
    .size-sm {
        @include font-size(xs);
    }
```

Can you also make the mixin throw an error when you pass a size that does not exist?

Can you create a function that gets the font size by name? I should be able to use it like this:

```scss
    .headline {
        font-size: font-size('l');
    }
```
