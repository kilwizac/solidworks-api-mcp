---
type: method
interface: IModelDoc2
member: InsertCompositeCurve
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - composite
  - curves
  - see
  - icompositecurvefeaturedata
  - curve
  - also
  - icurve
  - feature
  - ifeature
  - insertcompositecurve
  - imodeldoc2
  - model
  - doc2
  - insert
  - boolean
  - vb
  - net
  - vba
---

# IModelDoc2.InsertCompositeCurve

Inserts a composite curve based on selections.

## Signature

```csharp
System.Boolean InsertCompositeCurve()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To use this method, select the entities by calling
IModelDocExtension::SelectByID2
with a mark number of 1.
See the SOLIDWORKS Help for information about which entities are valid for selection.

## Examples

- Insert a Composite Curve (C#) (Insert_a_Composite_Curve_Example_CSharp.htm)
- Insert a Composite Curve (VB.NET) (Insert_a_Composite_Curve_Example_VBNET.htm)
- Insert a Composite Curve (VBA) (Insert_a_Composite_Curve_Example_VB.htm)