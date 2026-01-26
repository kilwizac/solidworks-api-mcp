---
type: method
interface: IModelDoc2
member: InsertSheetMetalBreakCorner
returns: void
parameters:
  -
    name: Type
    type: System.Int32
    description: Corner type as defined in swBreakCornerTypes_e
  -
    name: Distance
    type: System.Double
    description: Distance to break from corner
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IBreakCornerFeatureData
keywords:
  - break
  - corners
  - see
  - ibreakcornerfeaturedata
  - sheet
  - metal
  - also
  - isheetmetalfeaturedata
  - corner
  - feature
  - ifeature
  - insertsheetmetalbreakcorner
  - imodeldoc2
  - model
  - doc2
  - insert
  - type
  - int32
  - distance
  - double
  - void
  - modify
  - vb
  - net
  - vba
---

# IModelDoc2.InsertSheetMetalBreakCorner

Inserts a break corner into a sheet metal part.

## Signature

```csharp
void InsertSheetMetalBreakCorner( 
   System.Int32
Type
,
   System.Double
Distance
)
```
## Parameters

- `Type` (System.Int32): Corner type as defined in swBreakCornerTypes_e
- `Distance` (System.Double): Distance to break from corner

## Return Value

Unknown.

## Examples

- Modify Break Corner Feature (C#) (Modify_Break_Corner_Feature_Example_CSharp.htm)
- Modify Break Corner Feature (VB.NET) (Modify_Break_Corner_Feature_Example_VBNET.htm)
- Modify Break Corner Feature (VBA) (Modify_Break_Corner_Feature_Example_VB.htm)

## See Also

- `IBreakCornerFeatureData`