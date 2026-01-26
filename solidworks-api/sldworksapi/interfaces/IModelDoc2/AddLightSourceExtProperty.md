---
type: property
interface: IModelDoc2
member: AddLightSourceExtProperty
returns: System.Int32
parameters:
  -
    name: ID
    type: System.Int32
    description: ID of the light source
  -
    name: PropertyExtension
    type: System.Object
    description: Value you want to store for the light source
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.AddLightSource
  - IModelDoc2.DeleteLightSource
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.LightSourceUserName
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.SetLightSourceName
  - IModelDoc2.SetLightSourcePropertyValuesVB
keywords:
  - lighting
  - extension
  - addlightsourceextproperty
  - imodeldoc2
  - model
  - doc2
  - add
  - light
  - source
  - ext
  - id
  - int32
  - object
readonly: null
---

# IModelDoc2.AddLightSourceExtProperty

Stores a float, string, or integer value for the light source.

## Signature

```csharp
System.Int32 AddLightSourceExtProperty( 
   System.Int32
ID
,
   System.Object
PropertyExtension
)
```
## Parameters

- `ID` (System.Int32): ID of the light source
- `PropertyExtension` (System.Object): Value you want to store for the light source

## Return Value

ID of the extension property (see Remarks )

## Remarks

This property extension is stored on the model document and is unique to the specified light source.
To add the property extension, you must first define the VARIANT type (float, string, or integer), give your variable a value, and then call this method to place the value on the light source for future reference.
This method returns a 1-based index of the added property. Values returned from IModelDoc2::AddLightSourceExtProperty must be decremented by 1 when used as input to
IModelDoc2::GetLightSourceExtProperty
. However, the error value of -1 should not be decremented.

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.LightSourceUserName`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`