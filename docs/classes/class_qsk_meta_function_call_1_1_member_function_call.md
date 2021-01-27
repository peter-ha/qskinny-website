---
title: QskMetaFunctionCall::MemberFunctionCall
layout: docs

---




 [More...](#detailed-description)

Inherits from QskMetaFunction::FunctionCall

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MemberFunctionCall](/docs/classes/class_qsk_meta_function_call_1_1_member_function_call/#function-memberfunctioncall)**(Function function) |
| void | **[invoke](/docs/classes/class_qsk_meta_function_call_1_1_member_function_call/#function-invoke)**(int which, QSlotObjectBase * functionCall, QObject * object, void ** args, bool * ) |

## Detailed Description

```cpp
template <typename Function ,
typename Args ,
typename R >
class QskMetaFunctionCall::MemberFunctionCall;
```

## Public Functions Documentation

### function MemberFunctionCall

```cpp
inline explicit MemberFunctionCall(
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
    bool * 
)
```


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET