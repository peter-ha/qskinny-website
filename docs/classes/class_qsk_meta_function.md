---
title: QskMetaFunction
layout: docs

---


**Module:** **[Core](/docs/modules/group___core/)**



## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[FunctionCall](/docs/classes/class_qsk_meta_function_1_1_function_call/)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/class_qsk_meta_function/#enum-type)** { Invalid = -1, MemberFunction, StaticFunction, Functor} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-qskmetafunction)**() |
| | **[QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-qskmetafunction)**(const QskMetaFunction & ) |
| | **[QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-qskmetafunction)**(QskMetaFunction && ) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>| **[QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-qskmetafunction)**(T function) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>| **[QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-qskmetafunction)**(T function) |
| template <typename T ,QskMetaFunctionTraits::IsMemberFunction< T > *  =nullptr\> <br>| **[QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-qskmetafunction)**(T function) |
| | **[~QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-~qskmetafunction)**() |
| QskMetaFunction & | **[operator=](/docs/classes/class_qsk_meta_function/#function-operator=)**(const QskMetaFunction & ) |
| QskMetaFunction & | **[operator=](/docs/classes/class_qsk_meta_function/#function-operator=)**(QskMetaFunction && ) |
| bool | **[operator==](/docs/classes/class_qsk_meta_function/#function-operator==)**(const QskMetaFunction & ) const |
| bool | **[operator!=](/docs/classes/class_qsk_meta_function/#function-operator!=)**(const QskMetaFunction & other) const |
| | **[operator bool](/docs/classes/class_qsk_meta_function/#function-operator-bool)**() const |
| int | **[returnType](/docs/classes/class_qsk_meta_function/#function-returntype)**() const |
| size_t | **[parameterCount](/docs/classes/class_qsk_meta_function/#function-parametercount)**() const |
| const int * | **[parameterTypes](/docs/classes/class_qsk_meta_function/#function-parametertypes)**() const |
| void | **[invoke](/docs/classes/class_qsk_meta_function/#function-invoke)**(QObject * , void * args[], Qt::ConnectionType  =Qt::AutoConnection) |
| Type | **[functionType](/docs/classes/class_qsk_meta_function/#function-functiontype)**() const |
| bool | **[isNull](/docs/classes/class_qsk_meta_function/#function-isnull)**() const |
| FunctionCall * | **[functionCall](/docs/classes/class_qsk_meta_function/#function-functioncall)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMetaFunction](/docs/classes/class_qsk_meta_function/#function-qskmetafunction)**(FunctionCall * ) |

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
    const QskMetaFunction & 
)
```


### function QskMetaFunction

```cpp
QskMetaFunction(
    QskMetaFunction && 
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
    const QskMetaFunction & 
)
```


### function operator=

```cpp
QskMetaFunction & operator=(
    QskMetaFunction && 
)
```


### function operator==

```cpp
bool operator==(
    const QskMetaFunction & 
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
    QObject * ,
    void * args[],
    Qt::ConnectionType  =Qt::AutoConnection
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
    FunctionCall * 
)
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET