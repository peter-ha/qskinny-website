---
title: QskBoundedValueInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskBoundedInput

Inherited by [QskSlider](/docs/classes/classQskSlider/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedValueInput](/docs/classes/classQskBoundedValueInput/#function-qskboundedvalueinput)**(QQuickItem * parent =nullptr) |
| | **[~QskBoundedValueInput](/docs/classes/classQskBoundedValueInput/#function-~qskboundedvalueinput)**() override |
| qreal | **[value](/docs/classes/classQskBoundedValueInput/#function-value)**() const |
| qreal | **[valueAsRatio](/docs/classes/classQskBoundedValueInput/#function-valueasratio)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual qreal | **[fixupValue](/docs/classes/classQskBoundedValueInput/#function-fixupvalue)**(qreal value) const |
| void | **[alignInput](/docs/classes/classQskBoundedValueInput/#function-aligninput)**() override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[valueChanged](/docs/classes/classQskBoundedValueInput/#signal-valuechanged)**(qreal ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setValue](/docs/classes/classQskBoundedValueInput/#slot-setvalue)**(qreal value) |
| void | **[setValueAsRatio](/docs/classes/classQskBoundedValueInput/#slot-setvalueasratio)**(qreal ratio) |
| void | **[increment](/docs/classes/classQskBoundedValueInput/#slot-increment)**(qreal offset) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[value](/docs/classes/classQskBoundedValueInput/#property-value)**  |
| qreal | **[valueAsRatio](/docs/classes/classQskBoundedValueInput/#property-valueasratio)**  |

## Public Functions Documentation

### function QskBoundedValueInput

```cpp
QskBoundedValueInput(
    QQuickItem * parent =nullptr
)
```


### function ~QskBoundedValueInput

```cpp
~QskBoundedValueInput() override
```


### function value

```cpp
qreal value() const
```


### function valueAsRatio

```cpp
qreal valueAsRatio() const
```


## Protected Functions Documentation

### function fixupValue

```cpp
virtual qreal fixupValue(
    qreal value
) const
```


### function alignInput

```cpp
void alignInput() override
```


## Public Signals Documentation

### signal valueChanged

```cpp
void valueChanged(
    qreal 
)
```


## Public Slots Documentation

### slot setValue

```cpp
void setValue(
    qreal value
)
```


### slot setValueAsRatio

```cpp
void setValueAsRatio(
    qreal ratio
)
```


### slot increment

```cpp
void increment(
    qreal offset
) override
```


## Public Property Documentation

### property value

```cpp
qreal value;
```


### property valueAsRatio

```cpp
qreal valueAsRatio;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET