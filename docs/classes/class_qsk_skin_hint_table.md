---
title: QskSkinHintTable
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinHintTable](/docs/classes/class_qsk_skin_hint_table/#function-qskskinhinttable)**() |
| | **[QskSkinHintTable](/docs/classes/class_qsk_skin_hint_table/#function-qskskinhinttable)**(const QskSkinHintTable & other) |
| | **[~QskSkinHintTable](/docs/classes/class_qsk_skin_hint_table/#function-~qskskinhinttable)**() |
| QskSkinHintTable & | **[operator=](/docs/classes/class_qsk_skin_hint_table/#function-operator=)**(const QskSkinHintTable & other) |
| bool | **[setAnimation](/docs/classes/class_qsk_skin_hint_table/#function-setanimation)**(QskAspect aspect, QskAnimationHint animation) |
| QskAnimationHint | **[animation](/docs/classes/class_qsk_skin_hint_table/#function-animation)**(QskAspect aspect) const |
| bool | **[setHint](/docs/classes/class_qsk_skin_hint_table/#function-sethint)**(QskAspect aspect, const QVariant & skinHint) |
| const QVariant & | **[hint](/docs/classes/class_qsk_skin_hint_table/#function-hint)**(QskAspect aspect) const |
| template <typename T \> <br>bool | **[setHint](/docs/classes/class_qsk_skin_hint_table/#function-sethint)**(QskAspect aspect, const T & hint) |
| template <typename T \> <br>T | **[hint](/docs/classes/class_qsk_skin_hint_table/#function-hint)**(QskAspect aspect) const |
| bool | **[removeHint](/docs/classes/class_qsk_skin_hint_table/#function-removehint)**(QskAspect aspect) |
| QVariant | **[takeHint](/docs/classes/class_qsk_skin_hint_table/#function-takehint)**(QskAspect aspect) |
| bool | **[hasHint](/docs/classes/class_qsk_skin_hint_table/#function-hashint)**(QskAspect aspect) const |
| const std::unordered_map< QskAspect, QVariant > & | **[hints](/docs/classes/class_qsk_skin_hint_table/#function-hints)**() const |
| bool | **[hasAnimators](/docs/classes/class_qsk_skin_hint_table/#function-hasanimators)**() const |
| bool | **[hasStates](/docs/classes/class_qsk_skin_hint_table/#function-hasstates)**() const |
| bool | **[hasHints](/docs/classes/class_qsk_skin_hint_table/#function-hashints)**() const |
| void | **[clear](/docs/classes/class_qsk_skin_hint_table/#function-clear)**() |
| const QVariant * | **[resolvedHint](/docs/classes/class_qsk_skin_hint_table/#function-resolvedhint)**(QskAspect aspect, QskAspect * resolvedAspect =nullptr) const |
| QskAspect | **[resolvedAspect](/docs/classes/class_qsk_skin_hint_table/#function-resolvedaspect)**(QskAspect aspect) const |
| QskAspect | **[resolvedAnimator](/docs/classes/class_qsk_skin_hint_table/#function-resolvedanimator)**(QskAspect aspect, QskAnimationHint & hint) const |
| bool | **[isResolutionMatching](/docs/classes/class_qsk_skin_hint_table/#function-isresolutionmatching)**(QskAspect aspect1, QskAspect aspect2) const |

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

Updated on 26 January 2021 at 09:44:54 CET