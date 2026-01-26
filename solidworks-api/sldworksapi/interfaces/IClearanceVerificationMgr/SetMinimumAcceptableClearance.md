---
type: method
interface: IClearanceVerificationMgr
member: SetMinimumAcceptableClearance
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Double
    description: Minimum acceptable clearance value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IClearanceVerificationMgr.IgnoreClearanceEqualToSpecifiedValue
keywords:
  - setminimumacceptableclearance
  - iclearanceverificationmgr
  - clearance
  - verification
  - mgr
  - minimum
  - acceptable
  - value
  - double
  - boolean
---

# IClearanceVerificationMgr.SetMinimumAcceptableClearance

Sets the minimum acceptable clearance value.

## Signature

```csharp
System.Boolean SetMinimumAcceptableClearance( 
   System.Double
Value
)
```
## Parameters

- `Value` (System.Double): Minimum acceptable clearance value

## Return Value

True if minimum acceptable clearance value successfuly set, false if not

## Examples

- IClearanceVerificationMgr (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IClearanceVerificationMgr)

## See Also

- `IClearanceVerificationMgr.IgnoreClearanceEqualToSpecifiedValue`