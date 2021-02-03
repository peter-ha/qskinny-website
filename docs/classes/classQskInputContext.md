---
title: QskInputContext
layout: docs

---




Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputContext](/docs/classes/classQskInputContext/#function-qskinputcontext)**() |
| virtual | **[~QskInputContext](/docs/classes/classQskInputContext/#function-~qskinputcontext)**() |
| void | **[setFactory](/docs/classes/classQskInputContext/#function-setfactory)**(QskInputContextFactory * factory) |
| QskInputContextFactory * | **[factory](/docs/classes/classQskInputContext/#function-factory)**() const |
| QRectF | **[panelRect](/docs/classes/classQskInputContext/#function-panelrect)**() const |
| void | **[setInputPanelVisible](/docs/classes/classQskInputContext/#function-setinputpanelvisible)**(const QQuickItem * item, bool on) |
| bool | **[isInputPanelVisible](/docs/classes/classQskInputContext/#function-isinputpanelvisible)**() const |
| QLocale | **[locale](/docs/classes/classQskInputContext/#function-locale)**() const |
| QskTextPredictor * | **[textPredictor](/docs/classes/classQskInputContext/#function-textpredictor)**(const QLocale & locale) |
| QskInputContext * | **[instance](/docs/classes/classQskInputContext/#function-instance)**() |
| void | **[setInstance](/docs/classes/classQskInputContext/#function-setinstance)**(QskInputContext * inputContext) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[showPanel](/docs/classes/classQskInputContext/#function-showpanel)**(const QQuickItem * item) |
| virtual void | **[hidePanel](/docs/classes/classQskInputContext/#function-hidepanel)**(const QQuickItem * item) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[activeChanged](/docs/classes/classQskInputContext/#signal-activechanged)**() |
| void | **[panelRectChanged](/docs/classes/classQskInputContext/#signal-panelrectchanged)**() |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[QskPlatformInputContext](/docs/classes/classQskInputContext/#friend-qskplatforminputcontext)**  |

## Public Functions Documentation

### function QskInputContext

```cpp
QskInputContext()
```


### function ~QskInputContext

```cpp
virtual ~QskInputContext()
```


### function setFactory

```cpp
void setFactory(
    QskInputContextFactory * factory
)
```


### function factory

```cpp
QskInputContextFactory * factory() const
```


### function panelRect

```cpp
QRectF panelRect() const
```


### function setInputPanelVisible

```cpp
void setInputPanelVisible(
    const QQuickItem * item,
    bool on
)
```


### function isInputPanelVisible

```cpp
bool isInputPanelVisible() const
```


### function locale

```cpp
QLocale locale() const
```


### function textPredictor

```cpp
QskTextPredictor * textPredictor(
    const QLocale & locale
)
```


### function instance

```cpp
static QskInputContext * instance()
```


### function setInstance

```cpp
static void setInstance(
    QskInputContext * inputContext
)
```


## Protected Functions Documentation

### function showPanel

```cpp
virtual void showPanel(
    const QQuickItem * item
)
```


### function hidePanel

```cpp
virtual void hidePanel(
    const QQuickItem * item
)
```


## Public Signals Documentation

### signal activeChanged

```cpp
void activeChanged()
```


### signal panelRectChanged

```cpp
void panelRectChanged()
```


## Friends

### friend QskPlatformInputContext

```cpp
friend class QskPlatformInputContext(
    QskPlatformInputContext 
);
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET