---
type: property
interface: ILibraryFeatureData
member: LinkToLibraryPart
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - ILibraryFeatureData.Initialize
  - ILibraryFeatureData.LibraryPart
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - design
  - link
  - parent
  - parents
  - features
  - linktolibrarypart
  - data
  - part
  - boolean
  - vba
  - vb
  - net
readonly: null
---

# ILibraryFeatureData.LinkToLibraryPart

Gets or sets whether to the link the library feature to its parent library feature document.

## Signature

```csharp
System.Boolean LinkToLibraryPart {get; set;}
```
## Parameters

None.

## Return Value

True to link the library feature to its parent library feature document, false to not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.Initialize`
- `ILibraryFeatureData.LibraryPart`