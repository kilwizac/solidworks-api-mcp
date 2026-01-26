---
type: method
interface: IBodyFolder
member: IGetBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies in the folder
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBodyFolder.GetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - folder
  - igetbodies
  - ibodyfolder
  - body
  - count
  - int32
  - body2
---

# IBodyFolder.IGetBodies

Gets the bodies in the folder.

## Signature

```csharp
Body2 IGetBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bodies in the folder

## Return Value

in-process, unmanaged C++: Pointer to an array of IBody2 objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method gets the bodies in the folder; it does not get the bodies in any subfolders. See
Accessing Bodies in Body Folders
for details about the BodyFolder interface.
To get the number of bodies in the folder, use
IBodyFolder::GetBodyCount
before using this method.

## See Also

- `IBodyFolder.GetBodies`