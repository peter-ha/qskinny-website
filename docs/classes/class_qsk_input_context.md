---
title: QskInputContext
layout: docs

---




Inherits from QObject

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[activeChanged](/docs/classes/class_qsk_input_context/#signal-activechanged)**() |
| void | **[panelRectChanged](/docs/classes/class_qsk_input_context/#signal-panelrectchanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputContext](/docs/classes/class_qsk_input_context/#function-qskinputcontext)**() |
| virtual | **[~QskInputContext](/docs/classes/class_qsk_input_context/#function-~qskinputcontext)**() |
| void | **[setFactory](/docs/classes/class_qsk_input_context/#function-setfactory)**(QskInputContextFactory * factory) |
| QskInputContextFactory * | **[factory](/docs/classes/class_qsk_input_context/#function-factory)**() const |
| QRectF | **[panelRect](/docs/classes/class_qsk_input_context/#function-panelrect)**() const |
| void | **[setInputPanelVisible](/docs/classes/class_qsk_input_context/#function-setinputpanelvisible)**(const QQuickItem * item, bool on) |
| bool | **[isInputPanelVisible](/docs/classes/class_qsk_input_context/#function-isinputpanelvisible)**() const |
| QLocale | **[locale](/docs/classes/class_qsk_input_context/#function-locale)**() const |
| QskTextPredictor * | **[textPredictor](/docs/classes/class_qsk_input_context/#function-textpredictor)**(const QLocale & locale) |
| QskInputContext * | **[instance](/docs/classes/class_qsk_input_context/#function-instance)**() |
| void | **[setInstance](/docs/classes/class_qsk_input_context/#function-setinstance)**(QskInputContext * inputContext) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[showPanel](/docs/classes/class_qsk_input_context/#function-showpanel)**(const QQuickItem * item) |
| virtual void | **[hidePanel](/docs/classes/class_qsk_input_context/#function-hidepanel)**(const QQuickItem * item) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[QskPlatformInputContext](/docs/classes/class_qsk_input_context/#friend-qskplatforminputcontext)**  |

## Public Signals Documentation

### signal activeChanged

```cpp
void activeChanged()
```


### signal panelRectChanged

```cpp
void panelRectChanged()
```


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


## Friends

### friend QskPlatformInputContext

```cpp
friend class QskPlatformInputContext;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET