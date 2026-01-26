---
type: method
interface: IFeature
member: GetImportedFileName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IFeature.SetImportedFileName
keywords:
  - getimportedfilename
  - ifeature
  - feature
  - imported
  - file
  - name
  - string
---

# IFeature.GetImportedFileName

Gets the file name from an imported feature.

## Signature

```csharp
System.String GetImportedFileName()
```
## Parameters

None.

## Return Value

File name of the imported feature

## Remarks

This method applies only to imported features. All other features return an empty string. To get the type of this feature, use
IFeature::GetTypeName
.

## See Also

- `IFeature.SetImportedFileName`