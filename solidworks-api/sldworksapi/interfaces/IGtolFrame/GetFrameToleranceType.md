---
type: method
interface: IGtolFrame
member: GetFrameToleranceType
returns: System.Boolean
parameters:
  -
    name: TolType
    type: System.Int32
    description: Tolerance type as defined by swGtolGeomCharSymbol_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getframetolerancetype
  - igtolframe
  - gtol
  - frame
  - tolerance
  - type
  - tol
  - int32
  - boolean
---

# IGtolFrame.GetFrameToleranceType

Gets the tolerance type of this Gtol frame.

## Signature

```csharp
System.Boolean GetFrameToleranceType( 
   out System.Int32
TolType
)
```
## Parameters

- `TolType` (System.Int32): Tolerance type as defined by swGtolGeomCharSymbol_e (see Remarks )

## Return Value

True if Gtol frame tolerance type successfully retrieved, false if not

## Remarks

TolType may be one of only swGtolGeomCharSymbol_e.:
swGcsANG
swGcsPARALLEL
swGcsPERP
swGcsCIRCRUNOUT
swGcsSYMMETRY

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)