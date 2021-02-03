---
title: QskSkinHintTable
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinHintTable](/docs/classes/classQskSkinHintTable/#function-qskskinhinttable)**() |
| | **[QskSkinHintTable](/docs/classes/classQskSkinHintTable/#function-qskskinhinttable)**(const QskSkinHintTable & other) |
| | **[~QskSkinHintTable](/docs/classes/classQskSkinHintTable/#function-~qskskinhinttable)**() |
| QskSkinHintTable & | **[operator=](/docs/classes/classQskSkinHintTable/#function-operator=)**(const QskSkinHintTable & other) |
| bool | **[setAnimation](/docs/classes/classQskSkinHintTable/#function-setanimation)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskAnimationHint animation) |
| QskAnimationHint | **[animation](/docs/classes/classQskSkinHintTable/#function-animation)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| bool | **[setHint](/docs/classes/classQskSkinHintTable/#function-sethint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const QVariant & skinHint) |
| const QVariant & | **[hint](/docs/classes/classQskSkinHintTable/#function-hint)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| template <typename T \> <br>bool | **[setHint](/docs/classes/classQskSkinHintTable/#function-sethint)**([QskAspect](/docs/classes/classQskAspect/) aspect, const T & hint) |
| template <typename T \> <br>T | **[hint](/docs/classes/classQskSkinHintTable/#function-hint)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| bool | **[removeHint](/docs/classes/classQskSkinHintTable/#function-removehint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| QVariant | **[takeHint](/docs/classes/classQskSkinHintTable/#function-takehint)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| bool | **[hasHint](/docs/classes/classQskSkinHintTable/#function-hashint)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| const std::unordered_map< [QskAspect](/docs/classes/classQskAspect/), QVariant > & | **[hints](/docs/classes/classQskSkinHintTable/#function-hints)**() const |
| bool | **[hasAnimators](/docs/classes/classQskSkinHintTable/#function-hasanimators)**() const |
| bool | **[hasStates](/docs/classes/classQskSkinHintTable/#function-hasstates)**() const |
| bool | **[hasHints](/docs/classes/classQskSkinHintTable/#function-hashints)**() const |
| void | **[clear](/docs/classes/classQskSkinHintTable/#function-clear)**() |
| const QVariant * | **[resolvedHint](/docs/classes/classQskSkinHintTable/#function-resolvedhint)**([QskAspect](/docs/classes/classQskAspect/) aspect, [QskAspect](/docs/classes/classQskAspect/) * resolvedAspect =nullptr) const |
| [QskAspect](/docs/classes/classQskAspect/) | **[resolvedAspect](/docs/classes/classQskSkinHintTable/#function-resolvedaspect)**([QskAspect](/docs/classes/classQskAspect/) aspect) const |
| [QskAspect](/docs/classes/classQskAspect/) | **[resolvedAnimator](/docs/classes/classQskSkinHintTable/#function-resolvedanimator)**([QskAspect](/docs/classes/classQskAspect/) aspect, QskAnimationHint & hint) const |
| bool | **[isResolutionMatching](/docs/classes/classQskSkinHintTable/#function-isresolutionmatching)**([QskAspect](/docs/classes/classQskAspect/) aspect1, [QskAspect](/docs/classes/classQskAspect/) aspect2) const |

## Public Functions Documentation

### function QskSkinHintTable

```cpp
QskSkinHintTable()
```


### function QskSkinHintTable

```cpp
QskSkinHintTable(
    const QskSkinHintTable & other
)
```


### function ~QskSkinHintTable

```cpp
~QskSkinHintTable()
```


### function operator=

```cpp
QskSkinHintTable & operator=(
    const QskSkinHintTable & other
)
```


### function setAnimation

```cpp
bool setAnimation(
    QskAspect aspect,
    QskAnimationHint animation
)
```


### function animation

```cpp
QskAnimationHint animation(
    QskAspect aspect
) const
```


### function setHint

```cpp
bool setHint(
    QskAspect aspect,
    const QVariant & skinHint
)
```


### function hint

```cpp
inline const QVariant & hint(
    QskAspect aspect
) const
```


### function setHint

```cpp
template <typename T >
inline bool setHint(
    QskAspect aspect,
    const T & hint
)
```


### function hint

```cpp
template <typename T >
inline T hint(
    QskAspect aspect
) const
```


### function removeHint

```cpp
bool removeHint(
    QskAspect aspect
)
```


### function takeHint

```cpp
QVariant takeHint(
    QskAspect aspect
)
```


### function hasHint

```cpp
inline bool hasHint(
    QskAspect aspect
) const
```


### function hints

```cpp
const std::unordered_map< QskAspect, QVariant > & hints() const
```


### function hasAnimators

```cpp
inline bool hasAnimators() const
```


### function hasStates

```cpp
inline bool hasStates() const
```


### function hasHints

```cpp
inline bool hasHints() const
```


### function clear

```cpp
void clear()
```


### function resolvedHint

```cpp
const QVariant * resolvedHint(
    QskAspect aspect,
    QskAspect * resolvedAspect =nullptr
) const
```


### function resolvedAspect

```cpp
QskAspect resolvedAspect(
    QskAspect aspect
) const
```


### function resolvedAnimator

```cpp
QskAspect resolvedAnimator(
    QskAspect aspect,
    QskAnimationHint & hint
) const
```


### function isResolutionMatching

```cpp
bool isResolutionMatching(
    QskAspect aspect1,
    QskAspect aspect2
) const
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET