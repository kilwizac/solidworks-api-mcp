---
type: property
interface: IMessageBarDefinition
member: ResponseAText
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - responseatext
  - imessagebardefinition
  - message
  - bar
  - definition
  - response
  - text
  - string
  - imessagebarhandler
readonly: null
---

# IMessageBarDefinition.ResponseAText

Gets or sets the text displayed on the first button or command link of this message bar.

## Signature

```csharp
System.String ResponseAText {get; set;}
```
## Parameters

None.

## Return Value

Text displayed on first user response control; default is an empty string

## Remarks

This property must be set to a non-empty string if
IMessageBarDefinition::ResponseAType
is not
swUserMessageBarResponseType_e
.swUserMessageBarResponseType_None.

## Examples

- IMessageBarHandler (ms-its:swpublishedapi.chm::/SolidWorks.Interop.swpublished~SolidWorks.Interop.swpublished.IMessageBarHandler.html)