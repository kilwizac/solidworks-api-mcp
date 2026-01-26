---
type: method
interface: ICornerReliefFeatureData
member: SetBodyScope
returns: System.Int32
parameters:
  -
    name: SheetBody
    type: System.Object
    description: IBody2 sheet metal body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - setbodyscope
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - body
  - scope
  - sheet
  - object
  - int32
---

# ICornerReliefFeatureData.SetBodyScope

Sets the sheet metal body to which this corner relief feature is applied.

## Signature

```csharp
System.Int32 SetBodyScope( 
   System.Object
SheetBody
)
```
## Parameters

- `SheetBody` (System.Object): IBody2 sheet metal body

## Return Value

Error code as defined by swCornerReliefError_e

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)