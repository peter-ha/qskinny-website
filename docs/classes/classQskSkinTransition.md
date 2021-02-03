---
title: QskSkinTransition
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/classQskSkinTransition/#enum-type)** { Color = 1, Metric = 2, AllTypes = Color | Metric} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinTransition](/docs/classes/classQskSkinTransition/#function-qskskintransition)**() |
| virtual | **[~QskSkinTransition](/docs/classes/classQskSkinTransition/#function-~qskskintransition)**() |
| void | **[setSourceSkin](/docs/classes/classQskSkinTransition/#function-setsourceskin)**(QskSkin * skin) |
| QskSkin * | **[sourceSkin](/docs/classes/classQskSkinTransition/#function-sourceskin)**() const |
| void | **[setTargetSkin](/docs/classes/classQskSkinTransition/#function-settargetskin)**(QskSkin * skin) |
| QskSkin * | **[targetSkin](/docs/classes/classQskSkinTransition/#function-targetskin)**() const |
| void | **[setAnimation](/docs/classes/classQskSkinTransition/#function-setanimation)**(QskAnimationHint animationHint) |
| QskAnimationHint | **[animation](/docs/classes/classQskSkinTransition/#function-animation)**() const |
| void | **[setMask](/docs/classes/classQskSkinTransition/#function-setmask)**(Type type) |
| Type | **[mask](/docs/classes/classQskSkinTransition/#function-mask)**() const |
| void | **[process](/docs/classes/classQskSkinTransition/#function-process)**() |
| bool | **[isRunning](/docs/classes/classQskSkinTransition/#function-isrunning)**() |
| QVariant | **[animatedHint](/docs/classes/classQskSkinTransition/#function-animatedhint)**(const QQuickWindow * window, [QskAspect](/docs/classes/classQskAspect/) aspect) |
| QVariant | **[animatedGraphicFilter](/docs/classes/classQskSkinTransition/#function-animatedgraphicfilter)**(const QQuickWindow * window, int graphicRole) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[updateSkin](/docs/classes/classQskSkinTransition/#function-updateskin)**(QskSkin * , QskSkin * ) |

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

Updated on  3 February 2021 at 15:05:45 CET