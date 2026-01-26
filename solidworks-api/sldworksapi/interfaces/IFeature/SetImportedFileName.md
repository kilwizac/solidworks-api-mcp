---
type: method
interface: IFeature
member: SetImportedFileName
returns: System.Boolean
parameters:
  -
    name: ImpName
    type: System.String
    description: New filename of the imported feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IFeature.GetImportedFileName
keywords:
  - setimportedfilename
  - ifeature
  - feature
  - imported
  - file
  - name
  - imp
  - string
  - boolean
---

# IFeature.SetImportedFileName

Sets the file name of an imported feature.

## Signature

```csharp
System.Boolean SetImportedFileName( 
   System.String
ImpName
)
```
## Parameters

- `ImpName` (System.String): New filename of the imported feature

## Return Value

True if the filename was changed, false if not

## Remarks

This method applies only to imported features. To get the type of this feature, use
IFeature::GetTypeName
.

## See Also

- `IFeature.GetImportedFileName`