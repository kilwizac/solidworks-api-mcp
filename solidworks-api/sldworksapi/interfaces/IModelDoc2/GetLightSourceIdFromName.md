---
type: method
interface: IModelDoc2
member: GetLightSourceIdFromName
returns: System.Int32
parameters:
  -
    name: LightName
    type: System.String
    description: Internal name of the light source
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
  - IModelDoc2.GetLightSourceCount
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.LightSourceUserName
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.SetLightSourceName
  - IModelDoc2.SetLightSourcePropertyValuesVB
keywords:
  - lighting
  - id
  - getlightsourceidfromname
  - imodeldoc2
  - model
  - doc2
  - light
  - source
  - name
  - string
  - int32
---

# IModelDoc2.GetLightSourceIdFromName

Gets the ID of the specified light source.

## Signature

```csharp
System.Int32 GetLightSourceIdFromName( 
   System.String
LightName
)
```
## Parameters

- `LightName` (System.String): Internal name of the light source

## Return Value

ID for the light source

## Remarks

The ID for the light source can range from 0 to
n
, where
n
= (the total number of light sources - 1). To get the total number of light sources, use
IModelDoc2::GetLightSourceCount
.

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceCount`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.LightSourceUserName`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`