---
type: method
interface: IGtolFrame
member: GetIndicator
returns: System.Boolean
parameters:
  -
    name: IndicatorIndex
    type: System.Int32
    description: One-based index of tolerance indicator to retrieve
  -
    name: BorderType
    type: System.Int32
    description: Type of border as defined by swGtolIndicatorBorderType_e
  -
    name: TolType
    type: System.Int32
    description: Tolerance type as defined by swGtolGeomCharSymbol_e (see Remarks )
  -
    name: Datum
    type: System.String
    description: Datum feature symbol that refers to the BorderType
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getindicator
  - igtolframe
  - gtol
  - frame
  - indicator
  - index
  - int32
  - border
  - type
  - tol
  - datum
  - string
  - boolean
---

# IGtolFrame.GetIndicator

Gets the indicator border type, tolerance type, and datum at the specified indicator index for this Gtol frame.

## Signature

```csharp
System.Boolean GetIndicator( 
   System.Int32
IndicatorIndex
,
   out System.Int32
BorderType
,
   out System.Int32
TolType
,
   out System.String
Datum
)
```
## Parameters

- `IndicatorIndex` (System.Int32): One-based index of tolerance indicator to retrieve
- `BorderType` (System.Int32): Type of border as defined by swGtolIndicatorBorderType_e
- `TolType` (System.Int32): Tolerance type as defined by swGtolGeomCharSymbol_e (see Remarks )
- `Datum` (System.String): Datum feature symbol that refers to the BorderType

## Return Value

True if indicator successfully retrieved, false if not

## Remarks

Before calling this method, use
IGtolFrame:GetIndicatorCount
to determine IndicatorIndex.
TolType may be one of only swGtolGeomCharSymbol_e.:
swGcsANG
swGcsPARALLEL
swGcsPERP
swGcsCIRCRUNOUT
swGcsSYMMETRY

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)