---
title: QskMetaFunctionCall::StaticFunctionCall
layout: docs

---




 [More...](#detailed-description)

Inherits from QskMetaFunction::FunctionCall

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[StaticFunctionCall](/docs/classes/class_qsk_meta_function_call_1_1_static_function_call/#function-staticfunctioncall)**(Function function) |
| void | **[invoke](/docs/classes/class_qsk_meta_function_call_1_1_static_function_call/#function-invoke)**(int which, QSlotObjectBase * functionCall, QObject * object, void ** args, bool * ret) |

## Detailed Description

```cpp
template <typename Function ,
typename Args ,
typename R >
class QskMetaFunctionCall::StaticFunctionCall;
```

## Public Functions Documentation

### function StaticFunctionCall

```cpp
inline explicit StaticFunctionCall(
    Function function
)
```


### function invoke

```cpp
static inline void invoke(
    int which,
    QSlotObjectBase * functionCall,
    QObject * object,
    void ** args,
    bool * ret
)
```


-------------------------------

Updated on 23 January 2021 at 09:50:33 CET