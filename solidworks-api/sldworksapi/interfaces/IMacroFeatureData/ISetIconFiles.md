---
type: method
interface: IMacroFeatureData
member: ISetIconFiles
returns: void
parameters:
  -
    name: IconCount
    type: System.Int32
    description: Number of files for the icons
  -
    name: IconFiles
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the file names for the icons (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IMacroFeatureData.IGetIconFiles
  - IMacroFeatureData.IconFiles
keywords:
  - iseticonfiles
  - imacrofeaturedata
  - macro
  - feature
  - data
  - icon
  - files
  - count
  - int32
  - string
  - void
---

# IMacroFeatureData.ISetIconFiles

Sets the file names for the icons for this macro feature.

## Signature

```csharp
void ISetIconFiles( 
   System.Int32
IconCount
,
   ref System.String
IconFiles
)
```
## Parameters

- `IconCount` (System.Int32): Number of files for the icons
- `IconFiles` (System.String): in-process, unmanaged C++: Pointer to an array of the file names for the icons (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The array of the file names for IconFiles can contain either three or nine strings.
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

## See Also

- `IMacroFeatureData.IGetIconFiles`
- `IMacroFeatureData.IconFiles`