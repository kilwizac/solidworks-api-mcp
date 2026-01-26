---
type: method
interface: IModelDoc2
member: InsertDome
returns: void
parameters:
  -
    name: Height
    type: System.Double
    description: Height for the dome in meters
  -
    name: ReverseDir
    type: System.Boolean
    description: True if you want to reverse the dome direction, false if not
  -
    name: DoEllipticSurface
    type: System.Boolean
    description: RUE if you want the dome to be an elliptical surface, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IDomeFeatureData2
keywords:
  - domes
  - see
  - idomefeaturedata2
  - feature
  - also
  - ifeature
  - dome
  - insertdome
  - imodeldoc2
  - model
  - doc2
  - insert
  - height
  - double
  - reverse
  - dir
  - boolean
  - do
  - elliptic
  - surface
  - void
  - create
  - modify
  - vb
  - net
  - vba
---

# IModelDoc2.InsertDome

Inserts a dome.

## Signature

```csharp
void InsertDome( 
   System.Double
Height
,
   System.Boolean
ReverseDir
,
   System.Boolean
DoEllipticSurface
)
```
## Parameters

- `Height` (System.Double): Height for the dome in meters
- `ReverseDir` (System.Boolean): True if you want to reverse the dome direction, false if not
- `DoEllipticSurface` (System.Boolean): RUE if you want the dome to be an elliptical surface, false if not

## Return Value

Unknown.

## Remarks

Before using this method, you must select the face for the dome using a selection mark of 1. See
IModelDocExtension::SelectByID2
.

## Examples

- Create and Modify Dome Feature (C#) (Create_and_Modify_Dome_Feature_Example_CSharp.htm)
- Create and Modify Dome Feature (VB.NET) (Create_and_Modify_Dome_Feature_Example_VBNET.htm)
- Create and Modify Dome Feature (VBA) (Create_and_Modify_Dome_Feature_Example_VB.htm)

## See Also

- `IDomeFeatureData2`