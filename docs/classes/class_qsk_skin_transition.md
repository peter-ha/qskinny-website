---
title: QskSkinTransition
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/class_qsk_skin_transition/#enum-type)** { Color = 1, Metric = 2, AllTypes = Color | Metric} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinTransition](/docs/classes/class_qsk_skin_transition/#function-qskskintransition)**() |
| virtual | **[~QskSkinTransition](/docs/classes/class_qsk_skin_transition/#function-~qskskintransition)**() |
| void | **[setSourceSkin](/docs/classes/class_qsk_skin_transition/#function-setsourceskin)**(QskSkin * skin) |
| QskSkin * | **[sourceSkin](/docs/classes/class_qsk_skin_transition/#function-sourceskin)**() const |
| void | **[setTargetSkin](/docs/classes/class_qsk_skin_transition/#function-settargetskin)**(QskSkin * skin) |
| QskSkin * | **[targetSkin](/docs/classes/class_qsk_skin_transition/#function-targetskin)**() const |
| void | **[setAnimation](/docs/classes/class_qsk_skin_transition/#function-setanimation)**(QskAnimationHint animationHint) |
| QskAnimationHint | **[animation](/docs/classes/class_qsk_skin_transition/#function-animation)**() const |
| void | **[setMask](/docs/classes/class_qsk_skin_transition/#function-setmask)**(Type type) |
| Type | **[mask](/docs/classes/class_qsk_skin_transition/#function-mask)**() const |
| void | **[process](/docs/classes/class_qsk_skin_transition/#function-process)**() |
| bool | **[isRunning](/docs/classes/class_qsk_skin_transition/#function-isrunning)**() |
| QVariant | **[animatedHint](/docs/classes/class_qsk_skin_transition/#function-animatedhint)**(const QQuickWindow * window, QskAspect aspect) |
| QVariant | **[animatedGraphicFilter](/docs/classes/class_qsk_skin_transition/#function-animatedgraphicfilter)**(const QQuickWindow * window, int graphicRole) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[updateSkin](/docs/classes/class_qsk_skin_transition/#function-updateskin)**(QskSkin * , QskSkin * ) |

## Public Types Documentation

### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Color | 1|   |
| Metric | 2|   |
| AllTypes | Color | Metric|   |




## Public Functions Documentation

### function QskSkinTransition

```cpp
QskSkinTransition()
```


### function ~QskSkinTransition

```cpp
virtual ~QskSkinTransition()
```


### function setSourceSkin

```cpp
void setSourceSkin(
    QskSkin * skin
)
```


### function sourceSkin

```cpp
QskSkin * sourceSkin() const
```


### function setTargetSkin

```cpp
void setTargetSkin(
    QskSkin * skin
)
```


### function targetSkin

```cpp
QskSkin * targetSkin() const
```


### function setAnimation

```cpp
void setAnimation(
    QskAnimationHint animationHint
)
```


### function animation

```cpp
QskAnimationHint animation() const
```


### function setMask

```cpp
void setMask(
    Type type
)
```


### function mask

```cpp
Type mask() const
```


### function process

```cpp
void process()
```


### function isRunning

```cpp
static bool isRunning()
```


### function animatedHint

```cpp
static QVariant animatedHint(
    const QQuickWindow * window,
    QskAspect aspect
)
```


### function animatedGraphicFilter

```cpp
static QVariant animatedGraphicFilter(
    const QQuickWindow * window,
    int graphicRole
)
```


## Protected Functions Documentation

### function updateSkin

```cpp
virtual void updateSkin(
    QskSkin * ,
    QskSkin * 
)
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET