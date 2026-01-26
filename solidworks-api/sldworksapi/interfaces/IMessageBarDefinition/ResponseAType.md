---
type: property
interface: IMessageBarDefinition
member: ResponseAType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - responseatype
  - imessagebardefinition
  - message
  - bar
  - definition
  - response
  - type
  - int32
  - imessagebarhandler
readonly: null
---

# IMessageBarDefinition.ResponseAType

Gets or sets the first response user control for this message bar.

## Signature

```csharp
System.Int32 ResponseAType {get; set;}
```
## Parameters

None.

## Return Value

First response user control as defined by swUserMessageBarResponseType_e

## Remarks

Default value of this property is swUserMessageBarResponseType_e.swUserMessageBarResponseType_None.

## Examples

- IMessageBarHandler (ms-its:swpublishedapi.chm::/SolidWorks.Interop.swpublished~SolidWorks.Interop.swpublished.IMessageBarHandler.html)