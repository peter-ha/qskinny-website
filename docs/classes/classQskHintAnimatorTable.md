---
title: QskHintAnimatorTable
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskHintAnimatorTable](/docs/classes/classQskHintAnimatorTable/#function-qskhintanimatortable)**() |
| | **[~QskHintAnimatorTable](/docs/classes/classQskHintAnimatorTable/#function-~qskhintanimatortable)**() |
| void | **[start](/docs/classes/classQskHintAnimatorTable/#function-start)**([QskControl](/docs/classes/classQskControl/) * control, [QskAspect](/docs/classes/classQskAspect/) aspect, QskAnimationHint animationHint, const QVariant & from, const QVariant & to) |
| const QskHintAnimator * | **[animator](/docs/classes/classQskHintAnimatorTable/#function-animator)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| QVariant | **[currentValue](/docs/classes/classQskHintAnimatorTable/#function-currentvalue)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| bool | **[cleanup](/docs/classes/classQskHintAnimatorTable/#function-cleanup)**() |

## Public Functions Documentation

### function QskHintAnimatorTable

```cpp
QskHintAnimatorTable()
```


### function ~QskHintAnimatorTable

```cpp
~QskHintAnimatorTable()
```


### function start

```cpp
void start(
    QskControl * control,
    QskAspect aspect,
    QskAnimationHint animationHint,
    const QVariant & from,
    const QVariant & to
)
```


### function animator

```cpp
const QskHintAnimator * animator(
    QskAspect aspect
) const
```


### function currentValue

```cpp
QVariant currentValue(
    QskAspect aspect
) const
```


### function cleanup

```cpp
bool cleanup()
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET