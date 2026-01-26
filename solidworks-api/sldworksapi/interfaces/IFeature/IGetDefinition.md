---
type: method
interface: IFeature
member: IGetDefinition
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetDefinition
  - IFeature.IModifyDefinition2
  - IFeature.ModifyDefinition
keywords:
  - feature
  - see
  - also
  - ifeature
  - definition
  - igetdefinition
  - object
---

# IFeature.IGetDefinition

Gets the feature data object for a feature, such as an extrusion, loft, fillet, chamfer, etc., in order to access the parameters that control the definition of this feature.

## Signature

```csharp
System.Object IGetDefinition()
```
## Parameters

None.

## Return Value

IUnknown interface to the feature data object; use QueryInterface to get the interface to the actual object (see Remarks )

## Remarks

You can use this method to query the feature data object, and you can modify the feature data object using
IFeature::IModifyDefinition2
. Set the feature data object to null when it is no longer needed. Not all feature types are supported, so check to see that the returned object is valid.
To:
get the type of feature and the name of its associated interface, use
IFeature::GetTypeName
or
IFeature::GetTypeName2
.
see a complete list of interfaces for feature data objects (e.g., interfaces ending in FeatureData or FeatureData2, such as IExtrudeFeatureData2, ILoftFeatureData, ISimpleFilletFeatureData2, IChamferFeatureData2, etc.), see the
Features Interfaces
section in
Functional Categories
.
get the object of a feature that is not a feature data object, use
IFeature::GetSpecificFeature2
.

## See Also

- `IFeature.GetDefinition`
- `IFeature.IModifyDefinition2`
- `IFeature.ModifyDefinition`