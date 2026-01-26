---
type: property
interface: IModelDoc2
member: GetLightSourceExtProperty
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: ID of the light source
  -
    name: PropertyId
    type: System.Int32
    description: ID of the property extension (see Remarks )
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
  - getlightsourceextproperty
  - imodeldoc2
  - model
  - doc2
  - light
  - source
  - ext
  - id
  - int32
  - object
readonly: null
---

# IModelDoc2.GetLightSourceExtProperty

Gets a float, string, or integer value stored for the light source.

## Signature

```csharp
System.Object GetLightSourceExtProperty( 
   System.Int32
ID
,
   System.Int32
PropertyId
)
```
## Parameters

- `ID` (System.Int32): ID of the light source
- `PropertyId` (System.Int32): ID of the property extension (see Remarks )

## Return Value

Value stored for the light source

## Remarks

The type returned is based on the how the data was placed. See
IModelDoc2::AddLightSourceExtProperty
for details.
Values for Id can range from 0 to
n
, where
n
= (the total number of light sources - 1). To get the total number of light sources, use
IModelDoc2::GetLightSourceCount
.
The PropertyId parameter takes a 0-based index of the property. Values returned from IModelDoc2::AddLightSourceExtProperty must be decremented by 1 when used as input to IModelDoc2::GetLightSourceExtProperty. However, do not decrement the error value of -1.

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceCount`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.LightSourceUserName`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`