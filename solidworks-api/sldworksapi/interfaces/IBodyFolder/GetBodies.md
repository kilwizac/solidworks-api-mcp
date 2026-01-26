---
type: method
interface: IBodyFolder
member: GetBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBodyFolder.GetBodyCount
  - IBodyFolder.IGetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - folder
  - getbodies
  - ibodyfolder
  - body
  - object
---

# IBodyFolder.GetBodies

Gets the bodies in the folder.

## Signature

```csharp
System.Object GetBodies()
```
## Parameters

None.

## Return Value

Array of IBody2 objects

## Remarks

This method gets the bodies in the folder in the order in which they appear in the FeatureManager design tree; it does not get the bodies in any subfolders. See
Accessing Bodies in Body Folders
for details about the IBodyFolder interface.

## See Also

- `IBodyFolder.GetBodyCount`
- `IBodyFolder.IGetBodies`