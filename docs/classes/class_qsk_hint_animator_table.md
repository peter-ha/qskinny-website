---
title: QskHintAnimatorTable
layout: docs

---




## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskHintAnimatorTable](/docs/classes/class_qsk_hint_animator_table/#function-qskhintanimatortable)**() |
| | **[~QskHintAnimatorTable](/docs/classes/class_qsk_hint_animator_table/#function-~qskhintanimatortable)**() |
| void | **[start](/docs/classes/class_qsk_hint_animator_table/#function-start)**([QskControl](/docs/classes/class_qsk_control/) * control, QskAspect aspect, QskAnimationHint animationHint, const QVariant & from, const QVariant & to) |
| const QskHintAnimator * | **[animator](/docs/classes/class_qsk_hint_animator_table/#function-animator)**(QskAspect aspect) const |
| QVariant | **[currentValue](/docs/classes/class_qsk_hint_animator_table/#function-currentvalue)**(QskAspect aspect) const |
| bool | **[cleanup](/docs/classes/class_qsk_hint_animator_table/#function-cleanup)**() |

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

Updated on 22 January 2021 at 17:05:48 CET