---
type: method
interface: IPropertyManagerPage2
member: SetMessage2
returns: System.Boolean
parameters:
  -
    name: Message
    type: System.String
    description: Message text
  -
    name: Visibility
    type: System.Int32
    description: Visibility state of this message as defined by swPropertyManagerPageMessageVisibility
  -
    name: Caption
    type: System.String
    description: Caption for message
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setmessage2
  - ipropertymanagerpage2
  - manager
  - page2
  - message2
  - message
  - string
  - visibility
  - int32
  - caption
  - boolean
---

# IPropertyManagerPage2.SetMessage2

Obsolete. Superseded by PropertyManagerPage2::SetMessage3.

## Signature

```csharp
System.Boolean SetMessage2( 
   System.String
Message
,
   System.Int32
Visibility
,
   System.String
Caption
)
```
## Parameters

- `Message` (System.String): Message text
- `Visibility` (System.Int32): Visibility state of this message as defined by swPropertyManagerPageMessageVisibility
- `Caption` (System.String): Caption for message

## Return Value

True if the message is set, false if not

## Remarks

If Caption is empty, then the current caption is not changed.
This method should be useful when creating multi-page PropertyManager pages where you want different informational messages on each page.