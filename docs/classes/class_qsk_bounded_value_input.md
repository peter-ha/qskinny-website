---
title: QskBoundedValueInput
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskBoundedInput

Inherited by [QskSlider](/docs/classes/class_qsk_slider/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setValue](/docs/classes/class_qsk_bounded_value_input/#slot-setvalue)**(qreal value) |
| void | **[setValueAsRatio](/docs/classes/class_qsk_bounded_value_input/#slot-setvalueasratio)**(qreal ratio) |
| void | **[increment](/docs/classes/class_qsk_bounded_value_input/#slot-increment)**(qreal offset) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[valueChanged](/docs/classes/class_qsk_bounded_value_input/#signal-valuechanged)**(qreal ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBoundedValueInput](/docs/classes/class_qsk_bounded_value_input/#function-qskboundedvalueinput)**(QQuickItem * parent =nullptr) |
| | **[~QskBoundedValueInput](/docs/classes/class_qsk_bounded_value_input/#function-~qskboundedvalueinput)**() override |
| qreal | **[value](/docs/classes/class_qsk_bounded_value_input/#function-value)**() const |
| qreal | **[valueAsRatio](/docs/classes/class_qsk_bounded_value_input/#function-valueasratio)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual qreal | **[fixupValue](/docs/classes/class_qsk_bounded_value_input/#function-fixupvalue)**(qreal value) const |
| void | **[alignInput](/docs/classes/class_qsk_bounded_value_input/#function-aligninput)**() override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| qreal | **[value](/docs/classes/class_qsk_bounded_value_input/#property-value)**  |
| qreal | **[valueAsRatio](/docs/classes/class_qsk_bounded_value_input/#property-valueasratio)**  |

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


## Public Signals Documentation

### signal valueChanged

```cpp
void valueChanged(
    qreal 
)
```


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

Updated on 26 January 2021 at 09:44:54 CET