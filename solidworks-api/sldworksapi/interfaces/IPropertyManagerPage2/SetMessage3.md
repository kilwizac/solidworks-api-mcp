---
type: method
interface: IPropertyManagerPage2
member: SetMessage3
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
    name: Expanded
    type: System.Int32
    description: Expand, compress, or leave the state of the message as is, as defined by swPropertyManagerPageMessageExpanded
  -
    name: Caption
    type: System.String
    description: Caption for message
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - message
  - setmessage3
  - manager
  - page2
  - message3
  - string
  - visibility
  - int32
  - expanded
  - caption
  - boolean
---

# IPropertyManagerPage2.SetMessage3

Sets the message in this PropertyManager page.

## Signature

```csharp
System.Boolean SetMessage3( 
   System.String
Message
,
   System.Int32
Visibility
,
   System.Int32
Expanded
,
   System.String
Caption
)
```
## Parameters

- `Message` (System.String): Message text
- `Visibility` (System.Int32): Visibility state of this message as defined by swPropertyManagerPageMessageVisibility
- `Expanded` (System.Int32): Expand, compress, or leave the state of the message as is, as defined by swPropertyManagerPageMessageExpanded
- `Caption` (System.String): Caption for message

## Return Value

True if the message is set, false if not

## Remarks

If Caption is empty, then the current caption is not changed.
This method should be useful when creating multi-page PropertyManager pages where you want different informational messages on each page.