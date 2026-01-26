---
type: property
interface: IMessageBarDefinition
member: Severity
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - severity
  - imessagebardefinition
  - message
  - bar
  - definition
  - int32
  - imessagebarhandler
readonly: null
---

# IMessageBarDefinition.Severity

Gets or sets the severity level of this message bar.

## Signature

```csharp
System.Int32 Severity {get; set;}
```
## Parameters

None.

## Return Value

Severity level as defined by swUserMessageBarSeverity_e

## Remarks

The default value of this property is swUserMessageBarSeverity_e.swUserMessageBarSeverity_Information.

## Examples

- IMessageBarHandler (ms-its:swpublishedapi.chm::/SolidWorks.Interop.swpublished~SolidWorks.Interop.swpublished.IMessageBarHandler.html)