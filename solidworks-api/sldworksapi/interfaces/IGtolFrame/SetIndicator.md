---
type: method
interface: IGtolFrame
member: SetIndicator
returns: System.Boolean
parameters:
  -
    name: IndicatorIndex
    type: System.Int32
    description: One-based index of Gtol frame indicator to set
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
  - setindicator
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

# IGtolFrame.SetIndicator

Sets the indicator border type, tolerance type, and datum at the specified indicator index on the right side of this Gtol frame.

## Signature

```csharp
System.Boolean SetIndicator( 
   System.Int32
IndicatorIndex
,
   System.Int32
BorderType
,
   System.Int32
TolType
,
   System.String
Datum
)
```
## Parameters

- `IndicatorIndex` (System.Int32): One-based index of Gtol frame indicator to set
- `BorderType` (System.Int32): Type of border as defined by swGtolIndicatorBorderType_e
- `TolType` (System.Int32): Tolerance type as defined by swGtolGeomCharSymbol_e (see Remarks )
- `Datum` (System.String): Datum feature symbol that refers to the BorderType

## Return Value

True if indicator successfully set, false if not

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