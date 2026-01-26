---
type: method
interface: IGtolFrame
member: AddIndicator
returns: System.Boolean
parameters:
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
  - addindicator
  - igtolframe
  - gtol
  - frame
  - add
  - indicator
  - border
  - type
  - int32
  - tol
  - datum
  - string
  - boolean
---

# IGtolFrame.AddIndicator

Adds a tolerance indicator to the end of the list of indicators to the right of this Gtol frame.

## Signature

```csharp
System.Boolean AddIndicator( 
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

- `BorderType` (System.Int32): Type of border as defined by swGtolIndicatorBorderType_e
- `TolType` (System.Int32): Tolerance type as defined by swGtolGeomCharSymbol_e (see Remarks )
- `Datum` (System.String): Datum feature symbol that refers to the BorderType

## Return Value

True if tolerance indicator successfully added, false if not

## Remarks

Tolerance indicators:
define a tolerance zone within which a Gtol value applies.
are shown to the right of the main frame, but to the left of any text box for the first frame.
TolType may be one of only swGtolGeomCharSymbol_e.:
swGcsANG
swGcsPARALLEL
swGcsPERP
swGcsCIRCRUNOUT
swGcsSYMMETRY

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)