---
type: method
interface: IPartDoc
member: InsertBends2
returns: System.Boolean
parameters:
  -
    name: Radius
    type: System.Double
    description: Radius of the bends
  -
    name: UseBendTable
    type: System.String
    description: Bend table name (.btl file)
  -
    name: UseKfactor
    type: System.Double
    description: K-Factor ratio or -1 if not used
  -
    name: UseBendAllowance
    type: System.Double
    description: Bend allowance value or -1 if not used
  -
    name: UseAutoRelief
    type: System.Boolean
    description: True if auto-relief cuts are to be added, false if not
  -
    name: OffsetRatio
    type: System.Double
    description: Distance relief cut extends beyond bend (see Remarks )
  -
    name: DoFlatten
    type: System.Boolean
    description: True to create these three features: Sheet-Metal, Flatten-Bends, and Process-Bends, false to create only the Sheet-Metal feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related: []
keywords:
  - bends
  - thin
  - feature
  - part
  - parts
  - see
  - also
  - ipartdoc
  - insertbends2
  - doc
  - insert
  - bends2
  - radius
  - double
  - use
  - bend
  - table
  - string
  - kfactor
  - allowance
  - auto
  - relief
  - boolean
  - offset
  - ratio
  - do
  - flatten
---

# IPartDoc.InsertBends2

Creates bends in a thin-feature part.

## Signature

```csharp
System.Boolean InsertBends2( 
   System.Double
Radius
,
   System.String
UseBendTable
,
   System.Double
UseKfactor
,
   System.Double
UseBendAllowance
,
   System.Boolean
UseAutoRelief
,
   System.Double
OffsetRatio
,
   System.Boolean
DoFlatten
)
```
## Parameters

- `Radius` (System.Double): Radius of the bends
- `UseBendTable` (System.String): Bend table name (.btl file)
- `UseKfactor` (System.Double): K-Factor ratio or -1 if not used
- `UseBendAllowance` (System.Double): Bend allowance value or -1 if not used
- `UseAutoRelief` (System.Boolean): True if auto-relief cuts are to be added, false if not
- `OffsetRatio` (System.Double): Distance relief cut extends beyond bend (see Remarks )
- `DoFlatten` (System.Boolean): True to create these three features: Sheet-Metal, Flatten-Bends, and Process-Bends, false to create only the Sheet-Metal feature

## Return Value

True if successful, false if not

## Remarks

The offsetRatio argument is from 0.05 to 2.0.  Any other value fails to create the
bend features.
When True is passed to doFlatten, all three Sheet-Metal features are created.
For more information on these arguments, see SOLIDWORKS Help.