---
type: property
interface: IModelDoc2
member: ResetLightSourceExtProperty
returns: void
parameters:
  -
    name: ID
    type: System.Int32
    description: ID of the light source
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.AddLightSource
  - IModelDoc2.AddLightSourceExtProperty
  - IModelDoc2.DeleteLightSource
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.LightSourceUserName
  - IModelDoc2.SetLightSourceName
  - IModelDoc2.SetLightSourcePropertyValuesVB
keywords:
  - lighting
  - extension
  - resetlightsourceextproperty
  - imodeldoc2
  - model
  - doc2
  - reset
  - light
  - source
  - ext
  - id
  - int32
  - void
readonly: null
---

# IModelDoc2.ResetLightSourceExtProperty

Resets the properties for a light source.

## Signature

```csharp
void ResetLightSourceExtProperty( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): ID of the light source

## Return Value

Unknown.

## Remarks

Values for Id can range from 0 to
n
, where
n
= (the total number of light sources - 1). To get the total number of light sources, see
IModelDoc2::GetLightSourceCount
.

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.LightSourceUserName`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`