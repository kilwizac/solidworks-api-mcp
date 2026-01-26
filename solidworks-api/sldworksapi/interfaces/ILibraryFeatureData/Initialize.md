---
type: method
interface: ILibraryFeatureData
member: Initialize
returns: System.Boolean
parameters:
  -
    name: FileNameIn
    type: System.String
    description: Path and filename of the library part
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.LibraryPart
  - ILibraryFeatureData.LinkToLibraryPart
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - design
  - initialize
  - data
  - file
  - name
  - string
  - boolean
  - create
  - references
  - vb
  - net
  - vba
---

# ILibraryFeatureData.Initialize

Initializes a newly created library feature using the specified library part.

## Signature

```csharp
System.Boolean Initialize( 
   System.String
FileNameIn
)
```
## Parameters

- `FileNameIn` (System.String): Path and filename of the library part

## Return Value

True if the library feature is initialized, false if not

## Examples

- Create Library Feature With References (C#) (Create_Library_Feature_With_References_Example_CSharp.htm)
- Create Library Feature With References (VB.NET) (Create_Library_Feature_With_References_Example_VBNET.htm)
- Create Library Feature With References (VBA) (Create_Library_Feature_With_References_Example_VB.htm)

## See Also

- `ILibraryFeatureData.LibraryPart`
- `ILibraryFeatureData.LinkToLibraryPart`