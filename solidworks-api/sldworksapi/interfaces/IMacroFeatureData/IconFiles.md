---
type: property
interface: IMacroFeatureData
member: IconFiles
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IMacroFeatureData.GetIconFileCount
  - IMacroFeatureData.IGetIconFiles
  - IMacroFeatureData.ISetIconFiles
keywords:
  - iconfiles
  - imacrofeaturedata
  - macro
  - feature
  - data
  - icon
  - files
  - object
readonly: null
---

# IMacroFeatureData.IconFiles

Gets or sets the file names for the icons for this macro feature.

## Signature

```csharp
System.Object IconFiles {get; set;}
```
## Parameters

None.

## Return Value

Array of the file names for the icons (see Remarks )

## Remarks

The array of the file names for the icons can contain either three or nine strings.
Number of strings in array
Types of images in this order
Image format and sizes
Three
Regular
Suppressed
Highlighted
Windows bitmap (
*.bmp
) format
16 pixels wide X 18 pixels high
Nine
NOTES:
This size array is only valid for macro features created in parts, assemblies, and drawings in SOLIDWORKS 2017 and later.
SOLIDWORKS displays the appropriate images based on the current DPI setting of the display device.
Regular small
Suppressed small
Highlighted small
Regular medium
Suppressed medium
Highlighted medium
Regular large
Suppressed large
Highlighted large
Windows bitmap (
*.bmp
) format
Recommended sizes are:
Small: 20 pixels wide X 20 pixels high
Medium: 32 pixels wide X 32 pixels high
Large: 40 pixels wide X 40 pixels high
You can specify either the full path name or just the file name for the strings; for example,
c:
\
bitmaps
\
icon1.bmp
or
icon1.bmp
.
If you change the bitmaps after inserting them with a macro feature into a SOLIDWORKS document, then the new bitmaps are not displayed until you exit and restart SOLIDWORKS.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `IMacroFeatureData.GetIconFileCount`
- `IMacroFeatureData.IGetIconFiles`
- `IMacroFeatureData.ISetIconFiles`