---
title: QskMetaFunction
layout: docs

---


**Module:** **[Core](/docs/modules/group__Core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/classQskMetaFunction/#enum-type)** { Invalid = -1, MemberFunction, StaticFunction, Functor} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMetaFunction](/docs/classes/classQskMetaFunction/#function-qskmetafunction)**() |
| | **[QskMetaFunction](/docs/classes/classQskMetaFunction/#function-qskmetafunction)**(const QskMetaFunction & other) |
| | **[QskMetaFunction](/docs/classes/classQskMetaFunction/#function-qskmetafunction)**(QskMetaFunction && other) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>| **[QskMetaFunction](/docs/classes/classQskMetaFunction/#function-qskmetafunction)**(T function) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>| **[QskMetaFunction](/docs/classes/classQskMetaFunction/#function-qskmetafunction)**(T function) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>| **[QskMetaFunction](/docs/classes/classQskMetaFunction/#function-qskmetafunction)**(T function) |
| | **[~QskMetaFunction](/docs/classes/classQskMetaFunction/#function-~qskmetafunction)**() |
| QskMetaFunction & | **[operator=](/docs/classes/classQskMetaFunction/#function-operator=)**(const QskMetaFunction & other) |
| QskMetaFunction & | **[operator=](/docs/classes/classQskMetaFunction/#function-operator=)**(QskMetaFunction && other) |
| bool | **[operator==](/docs/classes/classQskMetaFunction/#function-operator==)**(const QskMetaFunction & other) const |
| bool | **[operator!=](/docs/classes/classQskMetaFunction/#function-operator!=)**(const QskMetaFunction & other) const |
| | **[operator bool](/docs/classes/classQskMetaFunction/#function-operator-bool)**() const |
| int | **[returnType](/docs/classes/classQskMetaFunction/#function-returntype)**() const |
| size_t | **[parameterCount](/docs/classes/classQskMetaFunction/#function-parametercount)**() const |
| const int * | **[parameterTypes](/docs/classes/classQskMetaFunction/#function-parametertypes)**() const |
| void | **[invoke](/docs/classes/classQskMetaFunction/#function-invoke)**(QObject * object, void * args[], Qt::ConnectionType connectionType =Qt::AutoConnection) |
| Type | **[functionType](/docs/classes/classQskMetaFunction/#function-functiontype)**() const |
| bool | **[isNull](/docs/classes/classQskMetaFunction/#function-isnull)**() const |
| FunctionCall * | **[functionCall](/docs/classes/classQskMetaFunction/#function-functioncall)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMetaFunction](/docs/classes/classQskMetaFunction/#function-qskmetafunction)**(FunctionCall * functionCall) |

## Public Types Documentation

### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Invalid | -1|   |
| MemberFunction | |   |
| StaticFunction | |   |
| Functor | |   |




## Public Functions Documentation

### function QskMetaFunction

```cpp
QskMetaFunction()
```


### function QskMetaFunction

```cpp
QskMetaFunction(
    const QskMetaFunction & other
)
```


### function QskMetaFunction

```cpp
QskMetaFunction(
    QskMetaFunction && other
)
```


### function QskMetaFunction

```cpp
template <typename T ,
QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr>
inline QskMetaFunction(
    T function
)
```


### function QskMetaFunction

```cpp
template <typename T ,
QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr>
inline QskMetaFunction(
    T function
)
```


### function QskMetaFunction

```cpp
template <typename T ,
QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr>
inline QskMetaFunction(
    T function
)
```


### function ~QskMetaFunction

```cpp
~QskMetaFunction()
```


### function operator=

```cpp
QskMetaFunction & operator=(
    const QskMetaFunction & other
)
```


### function operator=

```cpp
QskMetaFunction & operator=(
    QskMetaFunction && other
)
```


### function operator==

```cpp
bool operator==(
    const QskMetaFunction & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskMetaFunction & other
) const
```


### function operator bool

```cpp
inline explicit operator bool() const
```


### function returnType

```cpp
int returnType() const
```


### function parameterCount

```cpp
size_t parameterCount() const
```


### function parameterTypes

```cpp
inline const int * parameterTypes() const
```


### function invoke

```cpp
void invoke(
    QObject * object,
    void * args[],
    Qt::ConnectionType connectionType =Qt::AutoConnection
)
```


### function functionType

```cpp
Type functionType() const
```


### function isNull

```cpp
inline bool isNull() const
```


### function functionCall

```cpp
inline FunctionCall * functionCall() const
```


## Protected Functions Documentation

### function QskMetaFunction

```cpp
QskMetaFunction(
    FunctionCall * functionCall
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:46 CET