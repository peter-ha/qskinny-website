---
title: QskTextPredictor
layout: docs

---




Inherits from QObject

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Attribute](/docs/classes/class_qsk_text_predictor/#enum-attribute)** { Words = 1 << 0} |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[predictionChanged](/docs/classes/class_qsk_text_predictor/#signal-predictionchanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~QskTextPredictor](/docs/classes/class_qsk_text_predictor/#function-~qsktextpredictor)**() override |
| virtual void | **[request](/docs/classes/class_qsk_text_predictor/#function-request)**(const QString & text) =0 |
| virtual void | **[reset](/docs/classes/class_qsk_text_predictor/#function-reset)**() =0 |
| virtual int | **[candidateCount](/docs/classes/class_qsk_text_predictor/#function-candidatecount)**() const =0 |
| virtual QString | **[candidate](/docs/classes/class_qsk_text_predictor/#function-candidate)**(int ) const =0 |
| virtual QStringList | **[candidates](/docs/classes/class_qsk_text_predictor/#function-candidates)**() const |
| Attributes | **[attributes](/docs/classes/class_qsk_text_predictor/#function-attributes)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextPredictor](/docs/classes/class_qsk_text_predictor/#function-qsktextpredictor)**(Attributes attributes, QObject * parent) |

## Public Types Documentation

### enum Attribute

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Words | 1 << 0|   |




## Public Signals Documentation

### signal predictionChanged

```cpp
void predictionChanged()
```


## Public Functions Documentation

### function ~QskTextPredictor

```cpp
~QskTextPredictor() override
```


### function request

```cpp
virtual void request(
    const QString & text
) =0
```


### function reset

```cpp
virtual void reset() =0
```


### function candidateCount

```cpp
virtual int candidateCount() const =0
```


### function candidate

```cpp
virtual QString candidate(
    int 
) const =0
```


### function candidates

```cpp
virtual QStringList candidates() const
```


### function attributes

```cpp
Attributes attributes() const
```


## Protected Functions Documentation

### function QskTextPredictor

```cpp
QskTextPredictor(
    Attributes attributes,
    QObject * parent
)
```


-------------------------------

Updated on 23 January 2021 at 09:50:33 CET