---
type: property
interface: IClearanceResult
member: ClearanceValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - clearancevalue
  - iclearanceresult
  - clearance
  - result
  - value
  - double
  - iclearanceverificationmgr
readonly: true
---

# IClearanceResult.ClearanceValue

Gets the clearance value.

## Signature

```csharp
System.Double ClearanceValue {get;}
```
## Parameters

None.

## Return Value

Clearance value

## Remarks

This property is valid only if
IClearanceResult::ClearanceType
is
swClearanceType_e
.swClearanceType_Distance.

## Examples

- IClearanceVerificationMgr (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IClearanceVerificationMgr)